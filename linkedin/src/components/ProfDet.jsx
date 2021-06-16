import { useState, useEffect } from "react";

import ProfileSection from "./ProfileSection";

const ProfDet = ({match}) => {
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    const getProfiles = async () => {
        let id = match.params.userId
        if(id){
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTEwNjI5MTkzMDAwMTU2MGFiOTQiLCJpYXQiOjE2MjM2NTg3NTksImV4cCI6MTYyNDg2ODM1OX0.wSLELEDQ8EvVaUT7VwhhllP7b8dSxFmkatWvybYtSvI",
          },
        }
      );
      let profiles = await response.json();
      console.log("profiles", profiles);
      setProfileId(profiles);
    }};
    getProfiles();
  }, [match.params.userId]);

  return (
      <div>
  {
      <ProfileSection obj ={profileId} />
      
      }
      </div>
      )

  
};

export default ProfDet;
