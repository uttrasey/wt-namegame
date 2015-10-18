jest.dontMock('../Employee');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Employee from '../Employee';

var employeeProp = {
  name: 'Andrew Harris',
  url: 'http://willowtreeapps.com/wp-content/uploads/2014/12/headshot_andrew_harris1.jpg'
};

describe('Employee', () => {

  it('renders properly', () => {
    var employee = TestUtils.renderIntoDocument(
      <Employee item={employeeProp} />
    );

    var li = TestUtils.findRenderedDOMComponentWithTag(item, 'li');
    expect(li.getDOMNode().textContent).toEqual('Item 1 - $12');
  });
});
