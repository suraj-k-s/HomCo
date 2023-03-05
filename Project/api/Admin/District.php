<?php

include("../Connection.php");

    if(isset($_POST["district"]))

    {
    $District=$_POST["district"];


    $insQry = "insert into tbl_district(district_name)values('".$District."')";
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
        $selQry = "select * from tbl_district";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    }

    if($_SERVER['REQUEST_METHOD']=="DELETE")
    { 
        $delQry = "delete from tbl_district where district_id='".$_GET["delid"]."'";
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
        $upQry = "update tbl_district set district_name='".$_GET["district"]."' where district_id='".$_GET["id"]."'";
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