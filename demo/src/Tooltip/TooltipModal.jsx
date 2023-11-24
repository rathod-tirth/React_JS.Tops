import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

const CustomTooltip = () => (
   <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="tooltip-right">
         <form>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Email" />
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
               <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </Tooltip>}
      trigger={['click']}
   >
      <Button variant="secondary">Tooltip on right</Button>
   </OverlayTrigger>
);

export default CustomTooltip;
