<?php

include("../Connection.php");
if($_SERVER['REQUEST_METHOD']=="POST")

    {
    $Worker_name=$_POST["name"];
    $Worker_contact=$_POST["phone"];
    $Worker_email=$_POST["email"];
    $Worker_address=$_POST["address"];
    $Worker_password=$_POST["password"];
    $Placeid=$_POST["place"];
    $Workertypeid=$_POST["type"];

    $Photo=$_FILES["photo"]["name"];
    $temp=$_FILES["photo"]["tmp_name"];
    move_uploaded_file($temp,"../Assets/Workerphoto/".$Photo);
    
    


    $insQry = "insert into tbl_worker(worker_photo,worker_name,worker_contact,worker_email,worker_address,worker_password,place_id,workertype_id)values('".$Photo."','".$Worker_name."','".$Worker_contact."','".$Worker_email."','".$Worker_address."','".$Worker_password."','".$Placeid."','".$Workertypeid."')";
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
        $selQry = "select * from tbl_worker w inner join tbl_workertype t on t.wokertype_id=w.workertype_id inner join tbl_place p on p.place_id=w.place_id inner join tbl_district d on p.district_id=d.district_id
        ";
        $result = $Conn->query($selQry);
        $rows = array();
        
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    }

    

?>