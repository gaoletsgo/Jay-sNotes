git config
===

## git config : get and set configuration variables.

1. <span style="color: lightblue">/etc/gitconfig </span>  file:  apply to everu users on the system and all repository. 
    * `git config --system XXXX` <br> read and write from this file.
  
2. <span style="color: lightblue">~/.gitconfig</span> or <span style="color: lightblue">~/.config/git/config</span>  file: values specific personally to the user.
    * `git config --global XXXX` <br> read and write from this file. this affects **all** of the repositories your work with on your system.

3. <span style="color: lightblue">.git/config</span> file : 仅对当前repository有效

&starf; You can view all of your settings and where they are coming from using:

`$ git config --list --show-origin
`

## user identity  
* ### set username and email address.  
  every commit use this information.  
`$ git config --global user.name "John Doe"`  

  `$ git config --global user.email johndoe@example.com`

  &starf; 在特定项目中使用其他的用户名邮箱， 去掉--global重新配置。
