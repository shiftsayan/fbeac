import React from "react";

export const About = () => (
  <div id="about">
    <div className="precis">
      <h4>Facebook Employment Ad Collector</h4>
      <p>The Expertise@Scale lab at Carnegie Mellon University is conducting research on biases in the implicit targeting of employment ads on Facebook. This extension scrapes the various ads you are seeing (and no personal data) and sends it to our backend server. This gives us an extensive back catalog of ads on Facebook and how they are targeted, which we'll begin to analyze soon for patterns and implicit biases.</p>
      <p>None of your personal data (including your name) is collected by this extension. We <b>only</b> collect the HTML of the various ads you see on the sidebar and in your timeline. In case you don't mind sharing some personal demographic information with us for research purposes, please fill out <a href="http://wwww.example.com">this form</a>. This additional data will help us come up with stronger correlations during the analysis phase of this research project. As a reminder, this is totally voluntary.</p>
      <p>Thank you again for your continued support. To learn more about the project and the team behing it, check out the sources below.</p>
    </div>
    <ul>
      <li>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/globeandmail/facebook-political-ads"
          >Check out Globe and Mail's original extension source</a>
        </p>
      </li>
      <li>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.example.com"
          >Read the Whitepaper</a>
        </p>
      </li>
      <li>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:mail@example.com"
          >Email Us</a>
        </p>
      </li>
      <li>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ads/library/"
          >Facebook Ad Library</a>
        </p>
      </li>
    </ul>
  </div>
);
