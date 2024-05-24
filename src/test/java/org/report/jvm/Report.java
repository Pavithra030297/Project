package org.report.jvm;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Report {
	
	// Json report came from Test Runner Class
	public static void repoGeneration(String jsonReportPath) {

		File f = new File("C:\\Users\\Acer\\Downloads\\TechCoNativeNew\\TechCoNativeNew1\\TechCoNativeNew\\src\\test\\resources\\CucumberFile");
		
		Configuration c = new Configuration(f, "Flipkart");
		c.addClassifications("Platoform", "Windows");
		c.addClassifications("Browser", "Chrome");
		
		List<String> l = new ArrayList<String>();
		l.add(jsonReportPath);
		
		ReportBuilder r = new ReportBuilder(l, c);
		r.generateReports();
		
	}
}
