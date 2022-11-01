import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Info } from './Info'
export const Index = () => {
    return <div className='mt-5'>
        <BrowserRouter>
            <div className='ps-5'>
                <Link to="/" className='d-block'>Home</Link>
                <Link to="/about" className='d-block'>About</Link>
                <Link to="/contact" className='d-block'>Contact</Link>
                <Link to="/sss" className='d-block'>TestError</Link>
            </div>
            <hr />
            <div className='bg-warning'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/about/:userID' element={<Info />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='*' element={<main><p>There's nothing here</p></main>}></Route>
                </Routes>
            </div>

        </BrowserRouter>
    </div>

}