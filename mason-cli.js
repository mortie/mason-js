#!/usr/bin/env node

import * as mason from "./index.js"
import fs from "fs";

function usage() {
	console.log("Usage: mason-cli [--help] [file]")
}

let path = null;
for (const arg of process.argv.slice(2)) {
	if (arg == "--help") {
		usage();
		process.exit(0);
	} else if (arg.startsWith("-")) {
		console.log("Unknown option:", arg);
		usage();
		process.exit(1);
	} else if (path == null) {
		path = arg;
	} else {
		console.log("Unexpected parameter:", arg);
	}
}

function postProcessObject(obj) {
	if (typeof obj != "object" || obj == null) {
		return obj;
	}

	if (obj instanceof Uint8Array) {
		return Buffer.from(obj).toString("base64");
	}

	if (obj instanceof Array) {
		for (let i = 0; i < obj.length; ++i) {
			obj[i] = postProcessObject(obj[i]);
		}
		return obj;
	}

	for (const i in obj) {
		if (!obj.hasOwnProperty(i)) {
			continue;
		}

		obj[i] = postProcessObject(obj[i]);
	}
	return obj;
}

function onContent(content) {
	const obj = mason.parse(content);
	console.log(JSON.stringify(postProcessObject(obj), null, 4));
}

if (path != null) {
	onContent(fs.readFileSync(path, "utf-8"));
} else {
	let content = Buffer.alloc(0);
	process.stdin.on("data", data => content = Buffer.concat([content, data]));
	process.stdin.on("end", () => onContent(content.toString("utf-8")));
}
