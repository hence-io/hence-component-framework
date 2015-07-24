'use strict';
/**
 * @module hence-comp-model
 */

import {polymerIntegrity} from './polymerIntegrity';
import HenceComp from './HenceComp';

import console from 'consoler';

import _extend from 'lodash/object/extend';
import _defaults from 'lodash/object/defaults';

import _each from 'lodash/collection/each';

import _clone from 'lodash/lang/cloneDeep';

/**
 * @constructor
 * @param {Object} original The component being defined
 * @returns {Object} The resulting component, based on HenceComp, with some added Model specific functionality.
 */
let HenceSchema = (original)=> {
  let comp = _clone(original);

  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  _extend(comp.properties, {
    action: String,
    query: {
      type: Object
    },
    results: {
      type: Array,
      notify: true
    }
  });

  _extend(comp, {
  });

  return HenceComp(comp);
};

export {HenceSchema};