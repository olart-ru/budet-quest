/* global module */

let Items = require('../../js/util/items'),
    Utils = require('../../js/util/utils');

class Flask {

    constructor() {
        let self = this;

        self.id = 190;

        self.healAmount = 0;
        self.manaAmount = 0;

        let customData = Items.getCustomData(self.id);

        if (customData) {
            self.healAmount = customData.healAmount ? customData.healAmount : 0;
            self.manaAmount = customData.manaAmount ? customData.manaAmount : 0;
        }
    }

    onUse(character) {
        let self = this;

        if (self.healAmount)
            character.healHitPoints(self.healAmount);

        if (self.manaAmount)
            character.healManaPoints(self.manaAmount);

    }

}

module.exports = Flask;
