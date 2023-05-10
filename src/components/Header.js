import { Component } from 'react';

class Header extends Component {
  render() {
    const { title } = this.props;
    const { link } = this.props;

    return (
      <header>
        <div className='container flexbox'>
          <h1>{title}</h1>
          <p>{link}</p>
        </div>
      </header>
    )
  }
}

export default Header;