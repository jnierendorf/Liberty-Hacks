import React from 'react';

import '../../../../css/components/Scripts.css';

export default class SkypeChangeAddPicScript extends React.Component {
  render() {
    return (
      <div className="Script">
      <center>
        <a href="https://requestit.lmig.com/web/">Click here</a> to access the RequestIT form.  Login to RequestIT when prompted.
        <p>You will then have 2 options, depending on the action you would like to take:</p>
      </center>
        <ul>
         <li>1) <b>Import a photo</b> - To import a photo:</li>
          <ol>
          <li>Ensure that the photo you would like to use is located on your computer and you have taken the necessary steps to resize/crop the photo.  Ideally, the photo is a shoulders up view of you looking forward to allow for maximum visibility.  There is a 1.5 MB file size restriction on the uploaded photo. </li>
          <li>If you want to import your Liberty badge photo: </li>
            <ul>
              <li>   a. Log in to the My Career and Development</li>
              <li>   b. In the upper right-hand corner, click on My Account</li>
              <li>   c. Right-click on your photo and choose Save picture as...</li>
              <li>   d. Save the photo to a location on your computer (i.e. Pictures)</li>
            </ul>
          <li>If you want to use a different photo: on the RequestIT form, select Import a photo and then select the Browse button. </li>

          <li>On your computer, browse to the location that the file is stored and select it.</li>

          <li>Prior to uploading the photo, you will need to select the checkbox acknowledging that the photo will now be visible in the applications listed on the RequestIT form and can be removed at any time by re-submitting the form using the 'Remove photo' option described below. (Your photo will not appear until 24 hours after RIT is submitted.)</li>
          </ol>

          <li>2) <b>Remove a photo</b> - To remove your photo, simply select Remove photo and select Submit.  This will remove your photo(s) from Outlook/Skype for Business</li>
          <ul>
          <li> <bold>CAUTION:</bold> If a photo is removed OR changed, Outlook/Skype for Business may need to be closed and reopened for the new photo to be displayed.</li>
          </ul>
        </ul>
      </div>
    );
  }
}
