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

/**
 * @abstract
 */
class Oid
{
	/**
	 * @param {string|Oid} id
	 * @param {number} byteSize
	 * @param {number} charSize
	 */
	constructor(id, byteSize, charSize){
		this._id = String(id);
		this._byteSize = byteSize;
		this._charSize = charSize;
	}

	/**
	 * @return {string}
	 */
	getId(){
		return this._id;
	}

	/**
	 * @return {number}
	 */
	getByteSize(){
		return this._byteSize;
	}

	/**
	 * @return {number}
	 */
	getCharSize(){
		return this._charSize;
	}

	/**
	 * @return {number}
	 */
	getTimestamp(){
		if (this._timestamp == null) {
			this._timestamp = parseInt(this._id.substr(0, this._byteSize - 4), 16);
		}
		return this._timestamp;
	}

	/**
	 * @return {string}
	 */
	toString(){
		return this._id;
	}
}

/**
 * @+
 */
module.exports = Oid;