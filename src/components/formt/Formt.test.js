import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { fireEvent, prettyDOM  } from '@testing-library/dom';
import Formt from './index'


test('renders content', () => {
const date = {
    startDate: '2022-01-26',
    endDate: '2022-01-27'
}

const title = 'Búsqueda espacial'

const component = render(<Formt title={title} date={date} />)


//component.getByText('Búsqueda espacial')
expect(component.container).toHaveTextContent(title)

const h2 = component.container.querySelector('h2')
console.log(prettyDOM(h2))

})

test('clicking the button calls event', () => {
    const date = {
        startDate: '2022-01-26',
        endDate: '2022-01-27',
       
    }
    const setConsult = true

 
    const component = render(<Formt date={date} setConsult={setConsult} onSubmit={() => {}} />)

    expect(component.container).toHaveTextContent('Buscar')
 
})


