window.onload
{
    var slide_index = 0;
    
    doBindings();
}

function doBindings()
{
    right_panel_top_slide_show();
    document.getElementById("additional-professional-skills").addEventListener('click', additionalProSkillsActivation);
    window.addEventListener('scroll', educationDivActivation);
    window.addEventListener('scroll', experienceDivActivation);
    window.addEventListener('scroll', percentageCircleDivActivation);
    window.addEventListener('scroll', expertiseAdditionalDescriptionLiActivation);
    window.addEventListener('scroll', projectIndividualFlexboxDataDivActivation);
}

function percentageCircleDivActivation()
{
    var professional_skills_circle_var = document.querySelectorAll('.circle-1, .circle-2, .circle-3, .circle-4');
    
    for (var inc = 0; inc < professional_skills_circle_var.length; inc++)
    {
        var window_height = window.innerHeight;
        var reveal_top_detail = professional_skills_circle_var[inc].getBoundingClientRect().top;
        var reveal_bottom_detail = professional_skills_circle_var[inc].getBoundingClientRect().bottom;
        var reveal_point = 0;

        if (reveal_top_detail < (window_height - reveal_point) && reveal_bottom_detail >= 0)
        {
            professional_skills_circle_var[inc].classList.add('active');
        }
        else
        {
            professional_skills_circle_var[inc].classList.remove('active');
        }
    }
}

function additionalProSkillsActivation()
{
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    
    if (content.style.maxHeight)
    {
        content.style.maxHeight = null;
    }
    else
    {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
}

function right_panel_top_slide_show() 
{
    var inc;
    var right_panel_top_slides_var = document.getElementsByClassName("right-panel-top-slides");
    
    for (inc = 0; inc < right_panel_top_slides_var.length; inc++) 
    {
        right_panel_top_slides_var[inc].style.display = "none";  
    }

    slide_index++;
    
    if (slide_index > right_panel_top_slides_var.length) 
    {
        slide_index = 1
    }

    right_panel_top_slides_var[slide_index-1].style.display = "block";
    setTimeout(right_panel_top_slide_show, 3500);
}

function educationDivActivation()
{
    var education_individual_description_var = document.querySelectorAll('.education-individual-description');
    for (var inc = 0; inc < education_individual_description_var.length; inc++)
    {
        var window_height = window.innerHeight;
        var reveal_top_detail = education_individual_description_var[inc].getBoundingClientRect().top;
        var reveal_bottom_detail = education_individual_description_var[inc].getBoundingClientRect().bottom;
        var reveal_point = 0;

        if (reveal_top_detail < (window_height - reveal_point) && reveal_bottom_detail >= 0)
        {
            education_individual_description_var[inc].classList.add('active');
        }
        else
        {
            education_individual_description_var[inc].classList.remove('active');
        }
    }
}

function experienceDivActivation()
{
    var experience_individual_description_var = document.querySelectorAll('.experience-individual-description');
    for (var inc = 0; inc < experience_individual_description_var.length; inc++)
    {
        var window_height = window.innerHeight;
        var reveal_top_detail = experience_individual_description_var[inc].getBoundingClientRect().top;
        var reveal_bottom_detail = experience_individual_description_var[inc].getBoundingClientRect().bottom;
        var reveal_point = 0;

        if (reveal_top_detail < (window_height - reveal_point) && reveal_bottom_detail >= 0)
        {
            experience_individual_description_var[inc].classList.add('active');
        }
        else
        {
            experience_individual_description_var[inc].classList.remove('active');
        }
    }
}

function expertiseAdditionalDescriptionLiActivation()
{
    var expertise_additional_description_summary_ul_li = document.querySelectorAll('.expertise-additional-description-summary ul li');
    for (var inc = 0; inc < expertise_additional_description_summary_ul_li.length; inc++)
    {
        var window_height = window.innerHeight;
        var reveal_top_detail = expertise_additional_description_summary_ul_li[inc].getBoundingClientRect().top;
        var reveal_bottom_detail = expertise_additional_description_summary_ul_li[inc].getBoundingClientRect().bottom;
        var reveal_point = 0;

        if (reveal_top_detail < (window_height - reveal_point) && reveal_bottom_detail >= 0)
        {
            expertise_additional_description_summary_ul_li[inc].classList.add('active');
        }
        else
        {
            expertise_additional_description_summary_ul_li[inc].classList.remove('active');
        }
    }
}

function projectIndividualFlexboxDataDivActivation()
{
    var project_individual_flex_box_data = document.querySelectorAll('.project-individual-flex-box-data');
    for (var inc = 0; inc < project_individual_flex_box_data.length; inc++)
    {
        var window_height = window.innerHeight;
        var reveal_top_detail = project_individual_flex_box_data[inc].getBoundingClientRect().top;
        var reveal_bottom_detail = project_individual_flex_box_data[inc].getBoundingClientRect().bottom;
        var reveal_point = 0;

        if (reveal_top_detail < (window_height - reveal_point) && reveal_bottom_detail >= 0)
        {
            for (var loop_var = 0; loop_var < project_individual_flex_box_data[inc].childElementCount; loop_var++)
            {
                project_individual_flex_box_data[inc].children[loop_var].style.visibility = "visible";

                if (project_individual_flex_box_data[inc].children[loop_var].hasChildNodes)
                {
                    for (var loop_var_2 = 0; loop_var_2 < project_individual_flex_box_data[inc].children[loop_var].childElementCount; loop_var_2++)
                    {
                        project_individual_flex_box_data[inc].children[loop_var].children[loop_var_2].style.visibility = "visible";
                    }
                }
            }
        }
        else
        {
            project_individual_flex_box_data[inc].style.visibility = "hidden";
        }
    }
}