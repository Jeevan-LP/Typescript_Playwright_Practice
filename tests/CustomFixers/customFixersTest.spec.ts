import {Logintest, expect} from '../CustomFixers/customFixers.spec';

Logintest("Sudo Login test", async({sudoLogin})=>{

        await expect(sudoLogin).toHaveTitle('Swag Labs');

});
