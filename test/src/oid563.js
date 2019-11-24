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
const {IllegalArgumentError} = require('ganiyem-error');
const {Oid, Oid563} = require('../../');
const helper = require('../helper');

describe('Oid563', () => {
  it('must be instanceof Oid', () => {
    assert.ok(new Oid563(helper.createOid563Id()) instanceof Oid);
  });

  it('must be work create()', () => {
    assert.ok(Oid563.create() instanceof Oid);
  });

  it('must be work validate(create())', () => {
    assert.ok(Oid563.validate(Oid563.create()));
  });

  it('must be work validate(helper.createOid563Id())', () => {
    assert.ok(Oid563.validate(helper.createOid563Id()));
  });

  it('must be return "false" validate(helper.createOid563IdInvalid())', () => {
    assert.ok(!Oid563.validate(helper.createOid563IdInvalid()));
  });

  it('must be return "false" validate(helper.createOid453Id())', () => {
    assert.ok(!Oid563.validate(helper.createOid453Id()));
  });

  it('must be return "false" validate("")', () => {
    assert.ok(!Oid563.validate(''));
  });

  it('must be work generate(helper.createOid453MaxTimestamp())', () => {
    let time = helper.createOid453MaxTimestamp();
    let oid = new Oid563(Oid563.generate(time));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), time);
  });

  it('must be work generate(helper.createOid563MaxTimestamp())', () => {
    let time = helper.createOid563MaxTimestamp();
    let oid = new Oid563(Oid563.generate(time));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), time);
  });

  it('must be work generate(uint8)', () => {
    let oid = new Oid563(Oid563.generate(0xff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xff);
  });

  it('must be work generate(uint16)', () => {
    let oid = new Oid563(Oid563.generate(0xffff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xffff);
  });

  it('must be work generate(uint24)', () => {
    let oid = new Oid563(Oid563.generate(0xffffff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xffffff);
  });

  it('must be work generate(uint32)', () => {
    let oid = new Oid563(Oid563.generate(0xffffffff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xffffffff);
  });

  it('must be work generate(uint40)', () => {
    let oid = new Oid563(Oid563.generate(0xffffffffff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xffffffffff);
  });

  it('must be work generate(0)', () => {
    let oid = new Oid563(Oid563.generate(0));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0);
  });

  it('must be work getId()', () => {
    let id = helper.createOid563Id();
    let oid = new Oid563(id);
    assert.strictEqual(oid._id, id);
    assert.strictEqual(oid.getId(), id);
  });

  it('must be work getByteSize()', () => {
    let id = helper.createOid563Id();
    let oid = new Oid563(id);
    assert.strictEqual(oid._byteSize, 14);
    assert.strictEqual(oid.getByteSize(), 14);
  });

  it('must be work getCharSize()', () => {
    let id = helper.createOid563Id();
    let oid = new Oid563(id);
    assert.strictEqual(oid._charSize, 28);
    assert.strictEqual(oid.getCharSize(), 28);
  });

  it('must be work getTimestamp()', () => {
    let id = helper.createOid563Id();
    let oid = new Oid563(id);
    assert.strictEqual(oid._timestamp, void 0);
    assert.strictEqual(oid.getTimestamp(), helper.createOid563MaxTimestamp());
    assert.strictEqual(oid.getTimestamp(), oid._timestamp);
  });

  it('must be work toString()', () => {
    let id = helper.createOid563Id();
    let oid = new Oid563(id);
    assert.strictEqual(oid.toString(), id);
  });

  it('must be throw IllegalArgumentError() new Oid563("")', () => {
    try {
      new Oid563('');
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });

  it('must be throw IllegalArgumentError() new Oid563(helper.createOid563IdInvalid())', () => {
    try {
      new Oid563(helper.createOid563IdInvalid());
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });

  it('must be throw IllegalArgumentError() new Oid563(helper.createOid453Id())', () => {
    try {
      new Oid563(helper.createOid453Id());
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });
});