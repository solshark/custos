import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

import Mapper from '../app/mapper';

chai.use(chaiAsPromised);

const mockOpts = () => {
  const mock = {
    ip: '127.0.0.1',
    label: '',
    id: 'xxxxxx',
  };
  return mock;
};

describe('### Mapper module', () => {
  describe('## add method', () => {
    it('# should throw if no options provided', () => {
      const mapper = new Mapper();
      return expect(mapper.add()).to.be.rejectedWith(Error, 'opts is required');
    });
    it('# should throw if no ip provided', () => {
      const opts = mockOpts();
      delete opts.ip;
      const mapper = new Mapper();
      return expect(mapper.add(opts)).to.be.rejectedWith(Error, 'opts.ip is required');
    });
    it('# should throw if no id provided', () => {
      const opts = mockOpts();
      delete opts.id;
      const mapper = new Mapper();
      return expect(mapper.add(opts)).to.be.rejectedWith(Error, 'opts.id is required');
    });
  });
  describe('## remove method', () => {
    it('# should throw if no options provided', () => {
      const mapper = new Mapper();
      return expect(mapper.remove()).to.be.rejectedWith(Error, 'opts is required');
    });
    it('# should throw if no id provided', () => {
      const opts = mockOpts();
      delete opts.id;
      const mapper = new Mapper();
      return expect(mapper.remove(opts)).to.be.rejectedWith(Error, 'opts.id is required');
    });
  });
});
