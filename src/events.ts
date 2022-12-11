import { Address, StdEvent, StdEventApproval, StdEventDesc, StdEventId, StdEventState } from "./types";
import { astCtx } from "./astkn";
/**
* Event Module
*
* - Event module consists of functionalites to login as admin and Student
* - Students can Add Event , display Status of past,upcoming and live events ,Mutate EventState and End Events
* - Admin Approves events and can also display unapproved as well as approved events
*
* /

/**
* 
* # Student Section 
*
*/

/**
* Login as student   
*
* @param _addr - Wallet Address of the Student to login 
* @returns the response of login , `true` if login successfully or `false` if login fails
*
* login flag is returned by checking if address exits in registered students
*/
export const stdLogin = async (addr: Address): Promise<Boolean> => {
  //Mock data to login any student
  return await astCtx.student?.getSdStatus(addr);
}

/**
* Displays the list of events conducted by the students
*
* @param _addr - Wallet Address of the Student to Display  Events Conducted by the student
* @returns  An Array containg StdEvent Objects where @param event_name : name of event and @param event_id : Unique event identifier        
*
*/
export const dispConductedEvents = async (_addr: Address): Promise<Array<StdEvent>> => {
  return new Promise((resolve, _) => {
    return resolve(
      [{
        event_name: "pi_hack",
        event_id: "0x012343495034",
      },
      {
        event_name: "illam_hack",
        event_id: "0x0012392392"
      }]
    )
  });
}
/**
* Displays the list of  events participated by the students
*
* @param _addr - Wallet Address of the Student to Display Events participated by the student
* @returns  An Array containg StdEvent Objects where @param event_name : name of event and @param event_id : Unique event identifier        
*
*/
export const dispParticipatedEvents = async (_addr: Address): Promise<Array<StdEvent>> => {
  return new Promise((resolve, _) => {
    return resolve(
      [
        {
          event_name: "latency 2.0",
          event_id: "0x12349u4545",
        },
        {
          event_name: "beach_hack",
          event_id: "0x3449u5i5"
        },
      ]
    )
  });
}

/**
* Submit Event to be send to Approval by the Administrator
*
* @param _event - Description of Event to be conducted
* @param _addr - Wallet Address of the Student to register Event 
* @returns the response of Event registration , `true` if registered successfully or `false` if registration fails
*
*/
export const submitEvent = async (_event: StdEventDesc, _addr: Address): Promise<Boolean> => {
  //Mock data to login any student
  return new Promise((resolve, _) => resolve(true));
}


/**
* Displays the list of  events to be conducted Currently waiting for approval by the admin
*
* @param _addr - Wallet Address of the Student to Display Events participated by the student
* @returns  An Array containg StdEventApproval Object 
*
*/
export const getCurEventState = async (_addr: Address): Promise<Array<StdEventApproval>> => {
  return new Promise((resolve, _) => {
    return resolve(
      [
        {
          event: {
            event_name: "latency 2.0",
            event_id: "0x12349u4545",
            event_state: StdEventState.Upcoming,
          },
          approval: false
        },
        {
          event: {
            event_name: "beach_hack",
            event_id: "0x3449u5i5",
            event_state: StdEventState.Live,
          },
          approval: true,
        },
      ]
    )
  });
}

/**
* Declare Winner and close Event
*
* @param _event - ID of Event to be conducted
* @param _addr - Wallet Address of the Student to register Event 
* @returns the response of Event registration , `true` if registered successfully or `false` if registration fails
*
*/
export const endEvent = async (_event: StdEventId, _addr: Address): Promise<Boolean> => {
  //Mock data to login any student
  return new Promise((resolve, _) => resolve(true));
}


/**
*
* Change Event state From Upcoming to live 
* @param _event -  ID of Event to be conducted
* @param _addr - Wallet Address of the Student to register Event 
* @returns the response of Change in Event State  , `true` if StateChange was Successful or `false` if StateChange fails 
*
*/
export const setEventState = async (_event: StdEventId, _addr: Address): Promise<Boolean> => {
  //Mock data to login any student
  return new Promise((resolve, _) => resolve(true));
}


/**
*
* # Admin Section 
*
*/

/**
* Login as Admin
*
* @param addr - Wallet Address of the Admin to login 
* @returns the response of login , `true` if login successfully or `false` if login fails
* login flag is returned by checking if address  is registered as Admin in Events Smart Contract 
*
*/
export const isAdmin = async (addr: Address): Promise<Boolean> => {
  //Mock data to check address and If Admin returns `true` and return response 
  return new Promise((resolve, _) => resolve(addr === '0x0d31bA72f4754Eb40e7F6725B375B66ABDdd4c56'));
}


/**
* Displays the list of  events to be approved by admin
*
* @param _addr - Wallet Address of the Admin to Display Events  Unapproved by the Admin
* @returns  An Array containg StdEvent Objects where @param event_name : name of event and @param event_id : Unique event identifier        
*
*/
export const getUnApprovedEvents = async (_addr: Address): Promise<Array<StdEvent>> => {
  return new Promise((resolve, _) => {
    return resolve(
      [
        {
          event_name: "latency 3.0",
          event_id: "0x12349u454534",
        },
        {
          event_name: "MH_Hack",
          event_id: "0x3449u5i5233"
        },
      ]
    )
  });
}

/**
* Approve Event
*
* @param _event -  ID of Event to be conducted
* @param _addr - Wallet Address of Admin to approve Event 
* @returns the response of  Event approval, `true` if EventApproval was Successful or `false` if EventApproval fails 
*
*/
export const approveEvent = async (_event: StdEventId, _addr: Address): Promise<Boolean> => {
  return new Promise((resolve, _) => resolve(true));
}



/**
* Displays the list of  events that were approved by admin
*
* @param _addr Wallet Address of the Admin to Display Events that were Approved by Admin
* @returns  An Array containg StdEvent Objects where @param event_name : name of event and @param event_id : Unique event identifier        
*
*/
export const getApprovedEvents = async (_addr: Address): Promise<Array<StdEvent>> => {
  return new Promise((resolve, _) => {
    return resolve(
      [
        {
          event_name: "A-Hach 1.0",
          event_id: "0xdeadb33f",
        },
        {
          event_name: "B-hack 3.5",
          event_id: "0xb4dbo1345"
        },
      ]
    )
  });
}
