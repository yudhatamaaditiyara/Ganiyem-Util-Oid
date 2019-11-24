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
const {Oid, Oid453} = require('../../');
const helper = require('../helper');

describe('Oid453', () => {
  it('must be instanceof Oid', () => {
    assert.ok(new Oid453(helper.createOid453Id()) instanceof Oid);
  });

  it('must be work create()', () => {
    assert.ok(Oid453.create() instanceof Oid);
  });

  it('must be work validate(create())', () => {
    assert.ok(Oid453.validate(Oid453.create()));
  });

  it('must be work validate(helper.createOid453Id())', () => {
    assert.ok(Oid453.validate(helper.createOid453Id()));
  });

  it('must be return "false" validate(helper.createOid453IdInvalid())', () => {
    assert.ok(!Oid453.validate(helper.createOid453IdInvalid()));
  });

  it('must be return "false" validate(helper.createOid563Id())', () => {
    assert.ok(!Oid453.validate(helper.createOid563Id()));
  });

  it('must be return "false" validate("")', () => {
    assert.ok(!Oid453.validate(''));
  });

  it('must be work generate(helper.createOid453MaxTimestamp())', () => {
    let time = helper.createOid453MaxTimestamp();
    let oid = new Oid453(Oid453.generate(time));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), time);
  });

  it('must be work generate(helper.createOid563MaxTimestamp())', () => {
    let time = helper.createOid563MaxTimestamp();
    let oid = new Oid453(Oid453.generate(time));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), helper.createOid453MaxTimestamp());
  });

  it('must be work generate(uint8)', () => {
    let oid = new Oid453(Oid453.generate(0xff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xff);
  });

  it('must be work generate(uint16)', () => {
    let oid = new Oid453(Oid453.generate(0xffff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xffff);
  });

  it('must be work generate(uint24)', () => {
    let oid = new Oid453(Oid453.generate(0xffffff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xffffff);
  });

  it('must be work generate(uint32)', () => {
    let oid = new Oid453(Oid453.generate(0xffffffff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0xffffffff);
  });

  it('must be work generate(uint40)', () => {
    let oid = new Oid453(Oid453.generate(0xffffffffff));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), helper.createOid453MaxTimestamp());
  });

  it('must be work generate(0)', () => {
    let oid = new Oid453(Oid453.generate(0));
    assert.ok(oid instanceof Oid);
    assert.strictEqual(oid.getTimestamp(), 0);
  });

  it('must be work getId()', () => {
    let id = helper.createOid453Id();
    let oid = new Oid453(id);
    assert.strictEqual(oid._id, id);
    assert.strictEqual(oid.getId(), id);
  });

  it('must be work getByteSize()', () => {
    let id = helper.createOid453Id();
    let oid = new Oid453(id);
    assert.strictEqual(oid._byteSize, 12);
    assert.strictEqual(oid.getByteSize(), 12);
  });

  it('must be work getCharSize()', () => {
    let id = helper.createOid453Id();
    let oid = new Oid453(id);
    assert.strictEqual(oid._charSize, 24);
    assert.strictEqual(oid.getCharSize(), 24);
  });

  it('must be work getTimestamp()', () => {
    let id = helper.createOid453Id();
    let oid = new Oid453(id);
    assert.strictEqual(oid._timestamp, void 0);
    assert.strictEqual(oid.getTimestamp(), helper.createOid453MaxTimestamp());
    assert.strictEqual(oid.getTimestamp(), oid._timestamp);
  });

  it('must be work toString()', () => {
    let id = helper.createOid453Id();
    let oid = new Oid453(id);
    assert.strictEqual(oid.toString(), id);
  });

  it('must be throw IllegalArgumentError() new Oid453("")', () => {
    try {
      new Oid453('');
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });

  it('must be throw IllegalArgumentError() new Oid453(helper.createOid453IdInvalid())', () => {
    try {
      new Oid453(helper.createOid453IdInvalid());
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });

  it('must be throw IllegalArgumentError() new Oid453(helper.createOid563Id())', () => {
    try {
      new Oid453(helper.createOid563Id());
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });
});