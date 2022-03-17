/* 
In discord bot development, commands are created that can be executed by a
message with a special prefix, such as:

  dojo.find john

  where 'dojo.' is a prefix that is checked for and the cmd name is 'find'
  and the argument(s) are 'john'. This will trigger a function in the code
  with the arguments.

  However, some commands need to be given a cooldown so they are not executed
  too frequently. Use OOP to design a way to give commands a cooldown and
  keep track of who is on cooldown and for which commands using a command
  name, command cooldown, and a unique username as your relevant properties.
*/
