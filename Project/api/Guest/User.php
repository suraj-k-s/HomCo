<?php

include("../Connection.php");
if($_SERVER['REQUEST_METHOD']=="POST")

    {
    $User_name=$_POST["name"];
    $User_contact=$_POST["phone"];
    $User_email=$_POST["email"];
    $User_address=$_POST["address"];
    $User_password=$_POST["password"];
    $Placeid=$_POST["place"];

    $Photo=$_FILES["photo"]["name"];
    $temp=$_FILES["photo"]["tmp_name"];
    move_uploaded_file($temp,"../Assets/Userphoto/".$Photo);
    


    $insQry = "insert into tbl_user(user_photo,user_name,user_contact,user_email,user_address,user_password,place_id)values('".$Photo."','".$User_name."','".$User_contact."','".$User_email."','".$User_address."','".$User_password."','".$Placeid."')";
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
        $selQry = "select * from tbl_user u inner join tbl_place p on p.place_id=u.place_id inner join tbl_district d on p.district_id=d.district_id";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);
    }

   
    

?>