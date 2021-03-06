import React from "react";
import { connect } from "react-redux";
import { toggle } from "actions.js";
import { withI18n } from "i18n.js";
import { countUnratedRatings } from "utils.js";
import { ToggleType } from "constants.js";
import { Ads, UnratedRatings } from "components/ads.jsx";
import { Stories } from "components/stories.jsx";
import { About } from "components/about.jsx";
// Controls which section of tabs to show, defaults to the user's ads
export const Toggle = withI18n(
  ({ getMessage, type, message, active, amount, dispatch }) => (
    <div
      className={"toggle" + (active === type ? " active" : "")}
      onClick={() => dispatch(toggle(type, active))}
    >
      <p>
        {getMessage(message) || 'Stories'}
        {amount ? <b>{100 > amount ? amount : "100+"}</b> : ""}
      </p>
    </div>
  )
);

// Our Main container.
const TogglerUnconnected = ({ ads, ratings, active, language }) => (
  <div id="toggler">
    <div id="tabs">
      <Toggle
        amount={countUnratedRatings(ratings)}
        active={active}
        message="rate_ads"
        type={ToggleType.RATER}
      />
      <Toggle
        amount={countUnratedRatings(ads)}
        active={active}
        message="see_ads"
        type={ToggleType.ADS}
      />
      <Toggle
        amount={0}
        active={active}
        message="about"
        type={ToggleType.ABOUT}
      />
    </div>
    <div id="container">
      {active === ToggleType.ADS ? (
        <Ads ads={ads} />
      ) : active === ToggleType.STORIES ? (
        <Stories />
      ) : active === ToggleType.RATER ? (
        <UnratedRatings ratings={ratings} />
      ) : (
        <About />
      )}
    </div>
  </div>
);

export const Toggler = connect(state => state)(TogglerUnconnected);
