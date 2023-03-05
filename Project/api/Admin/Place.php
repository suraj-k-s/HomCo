<?php

include("../Connection.php");

    if(isset($_POST["place"]))

    {
    $Place=$_POST["place"];
    $Districtid=$_POST["district"];


    $insQry = "insert into tbl_place(place_name,district_id)values('".$Place."','" .$Districtid."')";
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
        $selQry = "select * from tbl_place ";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    }


    if($_SERVER['REQUEST_METHOD']=="DELETE")
    { 
        $delQry = "delete from tbl_place where place_id='".$_GET["delid"]."'";
        if($Conn->query($delQry))
            {
                echo "Delete";
            }

            else{
                echo "Failed";
            }
    
    }

    if($_SERVER['REQUEST_METHOD']=="PUT")
    { 
        $upQry = "update tbl_place set place_name='".$_GET["place"]."' where place_id='".$_GET["id"]."'";
        if($Conn->query($upQry))
            {
                echo "Updated";
            }
            else
            {
                echo "Failed";
            }
    
    }

?>