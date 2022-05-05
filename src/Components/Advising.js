import './Register.css';

import { Paper } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
export default function Advising() {
  return (
    <>
      <div className="row">
        <div className="col1">
          <div className="advisingHead">
            <div className="advisingHeader">Your advisor:</div>
            <div className="advisingName"> Papa John</div>
          </div>
          <img className="advisingImage" src="papa.jpeg" width="40%" />
        </div>
        <Paper className="list">
          <div className="col2">
            <strong> Information</strong>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <EmailIcon />{' '}
              <a href="mailto:papajohns@gmail.com">papajohns@gmail.com</a>
            </div>
            <div>Classroom: Gould-Simpson 917</div>
            <a href="google.com">Schedule an appointment</a>
          </div>
        </Paper>
      </div>
    </>
  );
}
