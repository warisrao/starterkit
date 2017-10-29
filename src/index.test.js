import {expect} from 'chai';

describe('our first test ', ()=>{
  it('should pass',()=>{
    expect(true).to.equal(true);
  });
});

import fs from 'fs';
import jsdom from 'jsdom';
const {JSDOM} = jsdom;

// describe dom test
describe('index.html',()=>{
    it('should konfinity dashboard', (done) =>{
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        const dom = new JSDOM(index);
            const h1 = dom.window.document.getElementsByTagName('h1')[0];

            expect(h1.innerHTML).to.equal('Starter Kit');
            done();
            window.close();
    })
})
