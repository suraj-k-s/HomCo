<?php

include("../Connection.php");

    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $Action = $_POST["action"];
        $Id = $_POST["id"];
    
    
       if($Action=="Accept")
       {
        $upQry = "update tbl_worker set worker_vstatus='1' where worker_id='".$Id."'";
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
        $upQry = "update tbl_worker set worker_vstatus='2' where worker_id='".$Id."'";
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