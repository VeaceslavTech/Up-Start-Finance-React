import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Up Start Finance</title>
        <meta property="og:title" content="Up Start Finance" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div
        id="titleContainer"
        className="home-hero hero-container section-container"
      >
        <span id="unio-title" className="home-title">
          <span className="home-text">Unite Empower Live</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <div id="philosophy_section" className="home-section section-container">
        <span className="home-title1">Philisophy</span>
        <span className="home-text002">
          <span>
            Immobilien sind eine der sichersten Anlageformen und ein
            fundamentaler
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text004"></br>
          <br></br>
          <span>
            Baustein der Menschlichen Freiheit.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            Steigende Preise und eine sich verändernde Marktlage erschwert es
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            Kleininvestoren lukrative Investitionen zu tätigen.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            Wir glauben an die Macht des anteiligen Eigentums und Ermächtigung
            des
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>Individuums</span>
        </span>
        <div className="home-container01">
          <button
            type="button"
            className="home-frame-button button button-primary"
          >
            <div className="home-base">
              <span className="home-text019 componentsbuttonMedium">
                Whitepaper
              </span>
            </div>
          </button>
        </div>
        <div className="home-container02">
          <div className="home-container03"></div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <h1 className="home-text020">Why Real Estate Tokenization</h1>
        <div className="home-max-width max-width">
          <div className="home-image"></div>
        </div>
        <div id="swiper_section" className="home-section2">
          <div className="home-container04">
            <div className="home-list">
              <div className="home-card">
                <div className="home-imagecontainer">
                  <div className="home-image1">
                    <span className="home-text021">
                      <span>placeholder</span>
                    </span>
                  </div>
                </div>
                <div className="home-textcontent">
                  <span className="home-text023">
                    <span>Product 1</span>
                  </span>
                  <span className="home-text025">
                    <span>Data 1</span>
                  </span>
                </div>
              </div>
              <div className="home-card1">
                <div className="home-imagecontainer1">
                  <div className="home-image2">
                    <span className="home-text027">
                      <span>placeholder</span>
                    </span>
                  </div>
                </div>
                <div className="home-textcontent1">
                  <span className="home-text029">
                    <span>Product 2</span>
                  </span>
                  <span className="home-text031">
                    <span>Data 2</span>
                  </span>
                </div>
              </div>
              <div className="home-card2">
                <div className="home-imagecontainer2">
                  <div className="home-image3">
                    <span className="home-text033">
                      <span>placeholder</span>
                    </span>
                  </div>
                </div>
                <div className="home-textcontent2">
                  <span className="home-text035">
                    <span>Product 3</span>
                  </span>
                  <span className="home-text037">
                    <span>Data 3</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Vector2001150"
            src="/external/vector2001150-xo9h.svg"
            className="home-vector200"
          />
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-max-width1 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="home-hero-image"
            />
          </div>
          <div className="home-content">
            <span className="home-text039 beforeHeading">get started</span>
            <h1 className="home-text040">Open your account today</h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text041">1</span>
              </div>
              <div className="home-container05">
                <span className="home-title2">Download UpStart App</span>
                <span className="home-text042">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text043">2</span>
              </div>
              <div className="home-container06">
                <span className="home-title3">Create your free account</span>
                <span className="home-text044">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text045">3</span>
              </div>
              <div className="home-container07">
                <span className="home-title4">
                  Link your existing credit cards
                </span>
                <span className="home-text046">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <span className="home-text047 beforeHeading">get started</span>
          <h1 className="home-text048">
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className="home-cards-container"></div>
        </div>
      </div>
      <div className="home-section5 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text051 beforeHeading">faq</span>
              <h1 className="home-text052">
                <span className="home-text053">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text055">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text056">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text057">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text058">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text059">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text060">
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text061">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text062">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon6">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text063">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image5"
            />
          </div>
          <div className="home-banner">
            <span className="home-text064 beforeHeading">get started</span>
            <h1 className="home-text065">
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className="home-text071">
              <span>
                Amet minim mollit non deserunt ullamco est sit
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                aliqua dolor do amet sint.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-btns">
              <button className="home-button button button-transparent">
                See all plans
              </button>
              <button className="home-button1 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container08">
            <div className="footer-column">
              <span className="home-text075">Product</span>
              <span className="home-text076">How it works</span>
              <span className="home-text077">Features</span>
              <span className="home-text078">Pricing</span>
              <span className="home-text079">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text081">App</span>
              <span className="home-text082">Download iOS app</span>
              <span className="home-text083">Download Android app</span>
              <span className="home-text084">Log in to Portal</span>
              <span className="home-text085">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text087">Company</span>
              <span className="home-text088">About us</span>
              <span className="home-text089">Culture</span>
              <span className="home-text090">Code of conduct</span>
              <span className="home-text091">Careers</span>
              <span className="home-text092">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text094">Invest</span>
              <span className="home-text095">Commodity</span>
              <span className="home-text096">Savings</span>
              <span className="home-text097">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text100">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text103">Security</span>
              <span className="home-text104">Security status</span>
              <span className="home-text105">ISO</span>
              <span className="home-text106">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text108">Follow</span>
              <span className="home-text109">Instagram</span>
              <span className="home-text110">Twitter</span>
              <span className="home-text111">Facebook</span>
              <span className="home-text112">Tik Tok</span>
              <span className="home-text113">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
