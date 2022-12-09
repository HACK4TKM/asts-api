import { Address, Student, Department, StudentReg } from "./types";

/**
* Student Module
* 
* - Contains definitions for Student Registration and login
* - Two functions to register and login user
* - More student functionalities to fetch event data is described in event module .
* eg :- 
* @example 
*```ts 
* const conductedEvents=await conductedEvents(addr);
* const currEventState=await getCurEventState(addr);
* ```
*
* Registers the User account on SToken System
* @param addr - Wallet Address of the Student to register 
* @param _std - Instance of StudentReg required for registration 
* @returns the response of registeration , `true` if registered successfully or `false` if registration fails
*
*/
export const regStudent = async (addr: Address, _std: StudentReg): Promise<Boolean> => {
  //creating mock data for testing
  //Mock data to check address and return response 
  return new Promise((resolve, _) => resolve(addr === "0x0d31bA72f4754Eb40e7F6725B375B66ABDdd4c56"));
}

/**
* Display the Student Profile Detials on SToken System
* @param addr -  Wallet Address of the Student to Display Student Profile 
* @returns `Student` Object corresponding to the address    
*/
export const dispStudent = async (addr: Address): Promise<Student> => {
  return new Promise((resolve, _) => {
    return resolve(
      addr === '0x0d31bA72f4754Eb40e7F6725B375B66ABDdd4c56'
        ? {
          name: "Adhi",
          address: addr,
          department: Department.IT,
          admn_no: 2128,
          tokens: {
            academic: 4,
            social: 0,
            sports: 0,

          }
        }
        : {
          name: "Babu",
          address: addr,
          department: Department.CS,
          admn_no: 3020,
          tokens: {
            academic: 3,
            social: 0,
            sports: 0,
          }
        }
    )
  });
}


