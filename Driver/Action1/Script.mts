Dim path
path="C:\Users\user235\Documents\UFT One\zomato\test data\test data.xlsx"
DataTable.AddSheet "test data"
DataTable.ImportSheet path,"Zomato sheet","test data"

rowCount = DataTable.GetSheet("test data").GetRowCount

For rows = 1 To rowCount

DataTable.SetCurrentRow rows

If DataTable.Value("Execution_Flag","Test Data")="Y" Then
executeTest (DataTable.Value("TestCaseID","Test Data"))
DataTable.Value("Result","test data") = Environment.Value("Result")
End If

Next

DataTable.ExportSheet path,"test data","Zomato sheet"



 'ObjectRepositary
 'popularcuisinesnear1
 'Bakeryrestaurantsnearme2()
 'Beveragesrestauranatsnearme3()
 'Continentalrestaurantsnearme4()
 'Dessertsrestaurantsnearme5()
 'Aboutwhoareyou6()
 'Blog7()
 'Aboutworkwithus8()
 ' Reportfraud9()

'DescriptiveObject
'1 Popularcuisinesnear
'2 Bakeryrestaurantsnearme
'3 Beveragesrestauranatsnearme
'4 Continentalrestaurantsnearme
'5 Dessertsrestaurantsnearme
'6 Aboutwhoareyou
'7 Blog
'8 Aboutworkwithus
'9 Investorrelations
'10 Reportfraud

 @@ script infofile_;_ZIP::ssf49.xml_;_


 @@ script infofile_;_ZIP::ssf51.xml_;_

 @@ script infofile_;_ZIP::ssf47.xml_;_
