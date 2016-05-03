package com.cogent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cogent.service.UserValidation;
import com.cogent.vo.User;

@Controller
@RequestMapping("/register")
public class RegisterController {

	@Autowired
    private UserValidation userValidation;
	
	@RequestMapping(value = "/registerNewUser", method = RequestMethod.POST, produces = "text/plain")
    public @ResponseBody String registerNewUser(@RequestBody User user) {
        return userValidation.registerNewUser(user);
    }
    
    @RequestMapping(value = "/checkInUser", method = RequestMethod.POST, produces = "text/plain")
    public @ResponseBody String checkInUser(@RequestBody User user) {
    	return userValidation.checkinUser(user);
    }
    
}
