import { invoicePdf } from '../src';

describe('Test', () => {
    it('return string', () => {
        expect(invoicePdf()).toBeDefined();
    });
});
