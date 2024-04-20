import {Request,Response,NextFunction} from 'express'
import { UserInput } from '../dto'
import { User } from '../models'



export const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { Firstname, Lastname, email, password, phone } = <UserInput>req.body;
  
      // Check if necessary fields are provided
      if (!Firstname || !Lastname || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
      }
  
      const ExistingUser = await User.findOne({ email });
  
      if (ExistingUser !== null) {
        return res.status(403).json({ message: "User already exists" });
      } else {
        const newUser = new User({ Firstname, Lastname, email, password, phone });
        await newUser.save();
        res.status(200).json({ message: "Signup successful!" });
      }
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  



export const LoginUser =async(req:Request,res:Response,next:NextFunction)=>{

}



export const GetUserProfile =async(req:Request,res:Response,next:NextFunction)=>{

}



export const UpdateUserProfile =async(req:Request,res:Response,next:NextFunction)=>{

}