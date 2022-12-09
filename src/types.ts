/**
 * 
 * Types Module
 * - Defines types for Student and Event functionalities
 * 
*/

/** 
Wallet Address of users
*/
export type Address = string;
/** 
Unique Identifier for each Event
*/
export type StdEventId = string;

/**
*Student api Types
*Student department types
*/
/**
*@enum Contains various departments
*/
export enum Department {
  EC,
  EEE,
  Mech,
  IT,
  CS,
  Civil
};
/**
* @public
*Student  Definition fo student data
*/
export interface Student {
  /**
    name -  Name of student
  */
  name: string;
  /**
    address - Wallet address of student
  */
  address: Address;
  /**
      department - Department of the student
  */

  department: Department;
  /**
      admn_no - Admission Number of the student
  */
  admn_no: number;
  /**
      tokens - Display number of all kinds of token  held by the student
  */
  tokens: StdToken;
}
/**Student  Requirec student data for registration
*/
export interface StudentReg {
  /**
    name -  Name of student
  */
  name: string;
  /**
      department - Department of the student
  */

  department: Department;
  /**
      admn_no - Admission Number of the student
  */
  admn_no: number;
}
/**
* StdToken
* Number of All Kinds of token held by student
* Requires number of All three variant of token
* 1.Academic
* 2.sports
* 3.Social
*/
export interface StdToken {
  academic: number;
  sports: number;
  social: number;

}

/**
*@enum SToken Types are of three types
*1.Academic token for Acadamic  activities
*2.Sports token for Sports
*3.Social token for Social and Sustainable activites
*/
export enum StokenKind {
  Academic,
  Sports,
  Social,
}
/*

/**
* @public
* SToken Individual Type and amount of token  
*/
export interface SToken {
  /**  
  kind - type of token
  */
  kind: StokenKind;
  /**  
   amt - amount/count of token held by account
  uint
  */
  amt: number;
}
/**
 *@public
 * Event details
*/
export interface StdEvent {
  /**
      event_name - event name 
  */
  event_name: string;
  /**
      event_id  - unique id representing each event
  */
  event_id: StdEventId;
  /**
      event_state - Current state of event
  */
  event_state?: StdEventState;
  /**
      winner  - optional Parameter ,Displays address of winner 
  */
  winner?: Address;
}

/**
 *@public
 * Description of event to be conducted 
*/
export interface StdEventDesc {
  /**
     event_name - event name 
  */
  event_name: string;
  /**
      event_desc - Short description of the event
  */
  event_desc: String;
  /**
      token_kind - Type of token to be recieved by winner 
  */
  token_kind: StokenKind;
  /**
    uint
      token_amt  - Amount of token to be recieved
  */
  token_amt: number;
}
/** 
*@enum Event state shows the current state of event
*1.Intial state , Event is upcoming
*2. Event is live
*3. Event is over and winner is declared
*/
export enum StdEventState {
  Upcoming,
  Live,
  Finished,
}

/**
 *@public
 * State of Event to be conducted by the Student   
*/
export interface StdEventApproval {
  /**
      event - Event object containing event name and id  
  */
  event: StdEvent;
  /**
      approval - Approval state of the event
  */
  approval: Boolean;
}
