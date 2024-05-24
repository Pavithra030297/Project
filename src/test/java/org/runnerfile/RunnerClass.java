package org.runnerfile;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.report.jvm.Report;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources", 
                 glue="org.stepDefinition", 
                 monochrome=true,
                 plugin= {"html:target\\HTML", "junit:target\\JUNIT\\JunitReport.xml", "json:target\\JSON\\JsonReport.json"})
public class RunnerClass {
	
	@AfterClass
	public static void reportGen() {

		Report.repoGeneration("C:\\Users\\Acer\\Downloads\\TechCoNativeNew\\TechCoNativeNew1\\TechCoNativeNew\\target\\JSON\\Report.json");
	}

} 
