# Facebook Employment Ad Collector

This is a Chrome extension and backend server for scrape and store ads served on Facebook developed to support an ongoing research project at [Carnegie Mellon University](https://www.cmu.edu). I worked on this for an independent study in the Human-Computer Interaction Institue. You can find my final presentation [here](https://docs.google.com/presentation/d/1tcIB-XJ7SXGUfOY9pNr3m82Ra-lncdya0-BvK5qB_Ro/edit?usp=sharing).

## Tech Stack

The extension was forked from Globe and Mail's [Facebook Political Ad Collector](https://github.com/globeandmail/fbpac-extension) and uses React and Webpack. 

The backend uses Flask (for now) along with a SQLite3 store. This is hosted on an AWS instance.

## About the Research

The Expertise@Scale lab at [Carnegie Mellon University](https://www.cmu.edu) is conducting research on biases in the implicit targeting of employment ads on Facebook. Using this extension to generate an extensive back catalog of ads served Facebook users, will provide data to analyze for patterns and implicit biases. This will be more exhaustive and trustworthy than Facebook's [Ad Library](https://www.facebook.com/ads/library/).
