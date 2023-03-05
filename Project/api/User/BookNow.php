<?php

include("../Connection.php");
if($_SERVER['REQUEST_METHOD']=="POST")

    {
    $details=$_POST["details"];
    $date=$_POST["date"];
    $user=$_POST["user"];
    $worker=$_POST["worker"];

    $insQry = "insert into tbl_request(request_details,request_date,request_for_date,user_id,worker_id)
    values('".$details."',curdate(),'".$date."','".$user."','".$worker."')";
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
        $selQry = "select * from tbl_request r inner join tbl_worker w on w.worker_id=r.worker_id inner join tbl_user u on u.user_id=r.user_id where u.user_id='".$_GET["id"]."'";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);
    }

   
    

?>