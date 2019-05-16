/**
 * @flow
 */
import AppController from './app.controller';
import LocalStorageService from './localStorage.service';

describe('App Controller', () => {
  let controller;
  const saveBtn = {};
  const getBtn = {};
  const clearBtn = {};

  describe('#constructor', () => {
    it('should set up handlers', () => {
      sandbox.stub(document, 'getElementsByClassName').callsFake((param): any => {
        if (param === 'save-btn') {
          return [saveBtn];
        } else if (param === 'get-btn') {
          return [getBtn];
        } else {
          return [clearBtn];
        }
      });

      controller = new AppController();

      expect(saveBtn.onclick).to.not.be.undefined;
      expect(getBtn.onclick).to.not.be.undefined;
      expect(clearBtn.onclick).to.not.be.undefined;
    });
  });

  describe('#save', () => {
    it('should save values with localStorage service', () => {
      const saveStub = sandbox.stub(LocalStorageService, 'save');
      controller.keyInput = {
        value: 'abc'
      };

      controller.valInput = {
        innerText: 'val'
      };

      controller.save();

      expect(saveStub).to.be.calledWith({ key: 'abc', val: 'val' });
    });

    // TODO: finish spec
    it('should display message to user when saving');
  });

  describe('#view', () => {
    it('should retrieve values from localStorage service and display', () => {
      const getStub = sandbox.stub(LocalStorageService, 'get');
      controller.keyInput = {
        value: 'abc'
      };

      controller.view();

      expect(getStub).to.be.calledWith({ key: 'abc' });
    });

    // TODO: finish spec
    it('should display message if error retrieving value');
  });

  describe('#clearValue', () => {
    it('should clear the input value', () => {
      controller.valInput = {
        innerText: 'abc'
      };

      controller.clearValue();

      expect(controller.valInput.innerText).to.equal('');
    });
  });
});
