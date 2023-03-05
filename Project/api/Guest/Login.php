<?php

include("../Connection.php");

if($_SERVER['REQUEST_METHOD']=="POST")
    { 
        $Email=$_POST["email"];
        $Password=$_POST["password"];

        $selQryW = "select * from tbl_worker where worker_vstatus='1' and worker_email='".$Email."' and worker_password='".$Password."'";
        $resultW = $Conn->query($selQryW);
        $rowsW = array();

        $selQryA = "select * from tbl_admin where admin_email='".$Email."' and admin_password='".$Password."'";
        $resultA = $Conn->query($selQryA);
        $rowsA = array();

        $selQryU = "select * from tbl_user where user_email='".$Email."' and user_password='".$Password."'";
        $resultU = $Conn->query($selQryU);
        $rowsU = array();


        if($rW = $resultW->fetch_assoc()) 
        {
            $rowsW[] = $rW;
            $rowsW[1] = "Worker";
            print json_encode($rowsW);
        }
        else if($rA = $resultA->fetch_assoc()) 
        {
            $rowsA[] = $rA;
            $rowsA[1] = "Admin";
            print json_encode($rowsA);
        }
        else if($rU = $resultU->fetch_assoc()) 
        {
            $rowsU[] = $rU;
            $rowsU[1] = "User";
            print json_encode($rowsU);
        }
    }

?>