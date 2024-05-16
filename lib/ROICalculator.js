//-------------------------------------------
// Tool Asumptions
//-------------------------------------------
const time_taken_for_thousand_paras_manual_validation = 15;   
let annotation_cost_for_every_correct_validation = 0.1; 



//------------------------------------------
//In house build cost variables
//------------------------------------------
let Cost_of_manual_annotation_per_hour = 10  

let number_of_users_validating = 1

//------------------------------------------
//User entered values
//------------------------------------------
let number_of_classes = 2
let prediction_api_usage_estimate = 10000
let total_number_of_paras_in_database = 100000 


//------------------------------------------
//code calculation
//------------------------------------------
const CalculateROI = (number_of_classes,
    number_of_users_validating,
    prediction_api_usage_estimate,
    total_number_of_paras_in_database,
    annotation_accuracy

    )=>{
        

    // console.log("=== Calculate was called",number_of_classes,
    // number_of_users_validating,
    // prediction_api_usage_estimate,
    // total_number_of_paras_in_database,
    // annotation_accuracy);
   // let annotation_accuracy = number_of_classes<=2?0.5:0.3;
   
  
    //  console.log("===accuracy ===",annotation_accuracy);
    //------------------------------------
    //dataNeuron tool assumptions
    //------------------------------------
    let time_taken_for_thousand_paras_manual_validation = 15   //hours
    let para_per_class_for_training = 100

    let para_validated_per_class =  para_per_class_for_training/annotation_accuracy;
    // console.log("---para validated per class",para_validated_per_class);
    //------------------------------------
    //data neuron tool pricing
    //------------------------------------
    let annotation_cost_for_every_correct_validation = 0.1 //dollar  
    let prediction_cost_per_para = 0.05 //dollar
    let Masterlist_cost = 150 //dollar
    
    


    //in house build cost variables
   let Cost_of_manual_annotation_per_hour = 10  //in dollar

    //variable calculation
    let paras_to_be_validated_per_class_by_user = para_per_class_for_training/annotation_accuracy
    // console.log("=== paras to be validated by user per class ===",paras_to_be_validated_per_class_by_user)
    let total_paras_validated_by_user = number_of_classes*paras_to_be_validated_per_class_by_user
    if (total_paras_validated_by_user>total_number_of_paras_in_database)
        total_paras_validated_by_user = total_number_of_paras_in_database

        //cost of Using Data Neuron Tool 
        let Annotation_cost = total_paras_validated_by_user*annotation_cost_for_every_correct_validation
         Annotation_cost *= number_of_users_validating
       //  Annotation_cost=Annotation_cost.toFixed(2);
        // console.log("=== annotation cost ===",Annotation_cost);
       let Prediction_cost = prediction_api_usage_estimate*prediction_cost_per_para
       let Annotator_SME_cost = (total_paras_validated_by_user*time_taken_for_thousand_paras_manual_validation*Cost_of_manual_annotation_per_hour)/1000
       Annotator_SME_cost *= number_of_users_validating
       let Total_Dataneuron_ALP_cost = Masterlist_cost+Annotation_cost+Prediction_cost+Annotator_SME_cost


       //In house = annotation team cost
    Annotator_SME_cost = ((total_number_of_paras_in_database+prediction_api_usage_estimate)*time_taken_for_thousand_paras_manual_validation*Cost_of_manual_annotation_per_hour)/1000
   // console.log("===sme1===",Annotator_SME_cost);
    Annotator_SME_cost *= number_of_users_validating;
   // console.log("===sme2===",Annotator_SME_cost)
    let total_in_house_team_cost = Annotator_SME_cost;
    
   // console.log('Total_Dataneuron_ALP_cost : ',Total_Dataneuron_ALP_cost)
   // console.log('total_in_house_team_cost : ',total_in_house_team_cost)

    let ROI = ((total_in_house_team_cost-Total_Dataneuron_ALP_cost)/Total_Dataneuron_ALP_cost)*100
   // console.log("===== ROI ====",ROI)
    
    //Time Reduction
   let total_time_data_neuron_tool = (time_taken_for_thousand_paras_manual_validation/1000)*total_paras_validated_by_user
   let total_time_in_house = ((total_number_of_paras_in_database+prediction_api_usage_estimate)*time_taken_for_thousand_paras_manual_validation)/1000
    let time_reduction = ((total_time_in_house-total_time_data_neuron_tool)/total_time_in_house)*100
    // console.log("--- time in dataneuron ---",total_time_data_neuron_tool);
    // console.log("--- time in in house  ---",total_time_in_house);
    return {ROI,time_reduction,total_time_in_house,total_time_data_neuron_tool};
}

export default CalculateROI;
let roi = CalculateROI(2,
    1,
    10000,
    100000,
    number_of_classes<=2?0.5:0.3);
// console.log(roi)