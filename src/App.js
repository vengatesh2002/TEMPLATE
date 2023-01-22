import './App.css';

import gif1 from './1.gif';
import gif2 from './2.gif';
import gif3 from './3.gif';
import gif4 from './gif4.gif';
function App() {
  return (
    
    <div className="App">
        
      <nav class="navbar background">
        
                <ul class="nav-list">
                    <div class="logo">
                        <img src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" />
                    </div>
                    <li><a href="#Product">Product</a><i class="fa fa-caret-down"></i></li>
                    <li><a href="#Our_story">Our story</a></li>
                    <li><a href="#Resource">Resource</a></li>
                </ul>
                <div class="rightNav">
                    <button class="button">Book a demo</button> 
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-bi">
                          Double the hires,half the <br></br>effort
                        </h1>
                        <br></br>
                        <p class="text-smal">
                        Open conversations and nurture relationships at scale and be the first choice 
                        when your ideal<br></br> candidate is ready to explore.
                        </p>
                        <br></br>
                        <button class="butto"><a class="link" href="https://www.kula.ai/kula-outreach"><p class="text-link">View Kula Outreach
                        </p></a></button>
                    </div> 
                </div>
            </section>


          <div class="container">
              <div class="con_left">
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                        <h2 class="te"><b>Kula Outreach</b></h2>
                            <h1 class="text-big" id="program">
                                Automated Candidate<br></br> Follow-ups
                            </h1>
                            <br></br>
                            <br></br>
                            <p class="text-small">
                            For prospective candidates, send automated, periodic follow-ups
                            and <br></br> value-adds to nurture long-term <br></br>relationships
                            </p>
                        </div>
                    </div>
                </section>
                </div>
                <div class="con_right">
                    <section class="section">
                    <img class='image' src={gif4} style={{margin:'auto'}}/>
                    </section>
                </div>
            </div>

            <div class="container">
              <div class="con_left">
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                        <h2 class="te"><b>Kula Outreach</b></h2>
                            <h1 class="text-big" id="program">
                            Personalized Candidate Reach Outs
                            </h1><br></br>
                            <br></br>
                            <p class="text-small">
                            No more spray and pray. Ensure 1:1 communication to all of your connections 
                            through dynamic personalization capabilities
                            </p>
                        </div>
                    </div>
                </section>
                </div>
                <div class="con_right">
                    <section class="section">
                    <img class='image' src={gif2} style={{margin:'auto'}}/>
                    </section>
                </div>
            </div>

            <div class="container">
              <div class="con_left">
                <section class="section">
                    <div class="box-main">
                        <div class="secondHalf">
                        <h2 class="te"><b>Kula Outreach</b></h2>
                            <h1 class="text-big" id="program">
                            Reach out on channels candidate prefer
                            </h1>
                            <br>
                            </br>
                            <br></br>
                            <p class="text-small">
                            Devise multichannel engagement flows with email, LinkedIn requests, and InMails.
                            </p>
                        </div>
                    </div>
                </section>
                </div>
                <div class="con_right">
                    <section class="section">
                    <img class='image' src={gif3} style={{margin:'auto'}}/>
                    </section>
                </div>
            </div>
<br></br>
<br></br>
<br></br>
            <footer className="footer">
                <p className="text-footer">
                     DESIGN BY <br></br>
                                VENGATESH HARI PRABU J
                </p>
            </footer>
    </div>
  );
}

export default App;