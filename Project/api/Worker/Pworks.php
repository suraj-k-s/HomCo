<?php

include("Connection.php");
if($_SERVER['REQUEST_METHOD']=="POST")

    {
    $Pworks_title=$_POST["title"];
    $Pworks_details=$_POST["details"];
    $Worker_id=$_POST["worker_id"];

    $Photo=$_FILES["pworks_photo"]["name"];
    $temp=$_FILES["pworks_photo"]["tmp_name"];
    move_uploaded_file($temp,"Assets/Pworksphoto/".$Photo);
    


    $insQry = "insert into tbl_pworks(pworks_photo,pworks_title,pworks_details,worker_id)values('".$Photo."','".$Pworks_title."','".$Pworks_details."','".$Worker_id."')";
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
        $selQry = "select * from tbl_pworks p inner join tbl_worker w on w.worker_id=p.worker_id";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    }

    if($_SERVER['REQUEST_METHOD']=="DELETE")
    { 
        $delQry = "delete from tbl_pworks where pworks_id='".$_GET["delid"]."'";
        if($Conn->query($delQry))
            {
                echo "Delete";
            }

            else{
                echo "Failed";
            }
    
    }

   
    

?>