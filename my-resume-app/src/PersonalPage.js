import React from 'react';
import './PersonalPage.css';  // 假设你将CSS样式保存在PersonalPage.css文件中

class PersonalPage extends React.Component {
  smoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div>
        <div className="navbar">
          <a href="#about" onClick={this.smoothScroll}>关于</a>
          <a href="#projects" onClick={this.smoothScroll}>项目</a>
          <a href="#publications" onClick={this.smoothScroll}>出版物</a>
          <a href="#research" onClick={this.smoothScroll}>研究</a>
        </div>

        <section id="about">
          <h2>关于我</h2>
          <p>这里是关于我的信息...</p>
        </section>

        <section id="projects">
          <h2>项目</h2>
          <p>这里是我的项目信息...</p>
        </section>

        <section id="publications">
          <h2>出版物</h2>
          <p>这里是我的出版物信息...</p>
        </section>

        <section id="research">
          <h2>研究</h2>
          <p>这里是我的研究信息...</p>
        </section>
      </div>
    );
  }
}

export default PersonalPage;
