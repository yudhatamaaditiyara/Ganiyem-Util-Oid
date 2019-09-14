/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const Oid = require('./oid');
const util = require('./util');
let regexp = /^[0-9a-f]{28}$/;
let random = util.createRandom(6);
let sequence = util.createSequence(0xffffff);

/**
 */
class Oid563 extends Oid
{
	/**
	 * @param {string|Oid} id
	 * @throws {Error}
	 */
	constructor(id){
		if (!Oid563.validate(id)) {
			throw new Error('Invalid ID');
		}
		super(id, 14, 28);
	}

	/**
	 * @returns {Oid563}
	 */
	static create(){
		return new Oid563(Oid563.generate(util.createTimestamp()));
	}

	/**
	 * @param {string|Oid} id
	 * @returns {boolean}
	 */
	static validate(id){
		return regexp.test(String(id));
	}

	/**
	 * @param {number} timestamp
	 * @returns {string}
	 */
	static generate(timestamp){
		let id = '';
		let seq = sequence();
		/* 5-byte time */
		id += util.hexmap[(timestamp >> 32) & 0xff];
		id += util.hexmap[(timestamp >> 24) & 0xff];
		id += util.hexmap[(timestamp >> 16) & 0xff];
		id += util.hexmap[(timestamp >> 8) & 0xff];
		id += util.hexmap[timestamp & 0xff];
		/* 6-byte random */
		id += util.hexmap[random[0]];
		id += util.hexmap[random[1]];
		id += util.hexmap[random[2]];
		id += util.hexmap[random[3]];
		id += util.hexmap[random[4]];
		id += util.hexmap[random[5]];
		/* 3-byte sequence */
		id += util.hexmap[(seq >> 16) & 0xff];
		id += util.hexmap[(seq >> 8) & 0xff];
		id += util.hexmap[seq & 0xff];
		return id;
	}
}

/**
 * @+
 */
module.exports = Oid563;