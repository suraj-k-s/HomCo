<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $Action = $_POST["action"];
        $Id = $_POST["id"];
    
    
       if($Action=="Accept")
       {
        $upQry = "update tbl_request set request_status='1' where request_id='".$Id."'";
        if($Conn->query($upQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
       }
       else if($Action=="Reject")
       {
        $upQry = "update tbl_request set request_status='2' where request_id='".$Id."'";
        if($Conn->query($upQry))
        {
            echo "true";
        }
        else{
            echo "false";
        } 
       }
    }
?>