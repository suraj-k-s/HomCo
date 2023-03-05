<?php

include("Connection.php");

    if(isset($_POST["complainttype"]))

    {
    $Complainttype=$_POST["complainttype"];


    $insQry = "insert into tbl_complainttype(complainttype_name)values('".$Complainttype."')";
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
        $selQry = "select * from tbl_complainttype";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    }

    if($_SERVER['REQUEST_METHOD']=="DELETE")
    { 
        $delQry = "delete from tbl_complainttype where complainttype_id='".$_GET["delid"]."'";
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
        $upQry = "update tbl_complainttype set complainttype_name='".$_GET["complainttype"]."' where complainttype_id='".$_GET["id"]."'";
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