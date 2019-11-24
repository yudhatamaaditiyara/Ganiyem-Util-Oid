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
const assert = require('assert');
const {Oid} = require('../../');
const helper = require('../helper');

describe('Oid', () => {
  it('must be work getId()', () => {
    let id = helper.createOid453Id();
    let oid = new Oid(id, 12, 24);
    assert.strictEqual(oid.getId(), id);
    assert.strictEqual(oid._id, id);
  });

  it('must be work getByteSize()', () => {
    let id = helper.createOid563Id();
    let oid = new Oid(id, 14, 28);
    assert.strictEqual(oid.getByteSize(), 14);
    assert.strictEqual(oid._byteSize, 14);
  });

  it('must be work getCharSize()', () => {
    let id = helper.createOid453Id();
    let oid = new Oid(id, 12, 24);
    assert.strictEqual(oid.getCharSize(), 24);
    assert.strictEqual(oid._charSize, 24);
  });

  it('must be work getTimestamp()', () => {
    let id = helper.createOid563Id();
    let oid = new Oid(id, 14, 28);
    assert.strictEqual(oid.getTimestamp(), helper.createOid563MaxTimestamp());
    assert.strictEqual(oid._timestamp, oid.getTimestamp());
  });

  it('must be work toString()', () => {
    let id = helper.createOid453Id();
    let oid = new Oid(id, 12, 24);
    assert.strictEqual(oid.toString(), id);
  });
});