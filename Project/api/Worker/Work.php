<?php

include("../Connection.php");
if($_SERVER['REQUEST_METHOD']=="POST")

    {
    $details=$_POST["details"];
    $date=$_POST["date"];
    $user=$_POST["email"];
    $worker=$_POST["address"];

    $insQry = "insert into tbl_request(user_photo,user_name,user_contact,user_email,user_address,user_password,place_id)values('".$Photo."','".$User_name."','".$User_contact."','".$User_email."','".$User_address."','".$User_password."','".$Placeid."')";
    if($Conn->query($insQry))
    {
        echo"Inserted";
    }

    else{
        echo "Failed";
    }


}

if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_request r inner join tbl_worker w on w.worker_id=r.worker_id inner join tbl_user u on u.user_id=r.user_id where u.worker_id='".$_GET["id"]."'";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);
    }

   
    

?>