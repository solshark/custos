import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

// import Client from '../app';
import Mapper from '../app/mapper';
import Client from '../dist/app';
import mockOpts from './mock.opts';

chai.use(chaiAsPromised);

describe('### Custos client', () => {
  describe('## main class', () => {
    it('# should throw if no options provided', () => {
      expect(() => new Client()).to.throw(Error, /Options is required/);
    });

    it('# should throw if no api key provided', () => {
      const opts = {};
      expect(() => new Client(opts)).to.throw(Error, /opts.API_KEY is required/);
    });

    it('# should create instance of custos.client', () => {
      const opts = mockOpts;
      expect(() => new Client(opts)).to.not.throw;
      const client = new Client(opts);
      expect(client).to.be.an.instanceof(Client);
    });

    it('# should expose mapper interface', () => {
      const client = new Client(mockOpts);
      expect(client).to.have.property('mapper');
      expect(client.mapper).to.be.an.instanceof(Mapper);
      expect(client.mapper).to.have.property('add');
      expect(client.mapper.add()).to.be.a('promise');
      expect(client.mapper).to.have.property('remove');
      expect(client.mapper.remove()).to.be.a('promise');
    });
  });
});
