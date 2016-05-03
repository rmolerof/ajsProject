package com.cogent.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.cogent.vo.User;

@Service("userValidation")
public class UserValidation {
	
	private static Map<String, User> userMap = new HashMap<String, User>();
	
	public List<User> getAllUsers(){
		return new ArrayList<User>(userMap.values());
	}
	
	public String registerNewUser(User user){
		if(userMap.containsValue(user) == true){
			return "false"; 
		} else {
			userMap.put(user.getEmail(), user);
			return "true";
		}
	}
	
	public String checkinUser(User user){
		if(userMap.containsKey(user.getEmail()) == true){
			User storedUser = userMap.get(user.getEmail()); 
			if(storedUser.getPassword().equals(user.getPassword())){
				if(!storedUser.isCheckedIn()){
					storedUser.setCheckedIn(true);
					return "200"; // user was checked-in
				} else {
					return "302"; // user was already checked-in
				}
			} else {
				return "401"; // wrong password
			}
		} else {
			return "404"; // user not found
		}
	}
}
